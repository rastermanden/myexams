"use client";

import { useState } from "react";

type ExperimentType = "mønt" | "terning";

const EXPERIMENT_OPTIONS: { value: ExperimentType; label: string }[] = [
  { value: "mønt", label: "Møntkast" },
  { value: "terning", label: "Terningekast (fair)" },
];

type TreeNode = {
  label: string;
  probability: string;
  children?: TreeNode[];
};

function buildCoinTree(depth: number): TreeNode {
  if (depth === 0) {
    return { label: "Start", probability: "1", children: buildCoinChildren(1, depth) };
  }
  return { label: "Start", probability: "1", children: buildCoinChildren(1, depth) };
}

function buildCoinChildren(currentDepth: number, maxDepth: number): TreeNode[] | undefined {
  if (currentDepth > maxDepth) return undefined;
  return ["Krone (K)", "Plat (P)"].map((label) => ({
    label,
    probability: "½",
    children: buildCoinChildren(currentDepth + 1, maxDepth),
  }));
}

function buildDiceTree(outcomes: number[]): TreeNode {
  return {
    label: "Start",
    probability: "1",
    children: outcomes.map((o) => ({
      label: String(o),
      probability: `1/6`,
      children: undefined,
    })),
  };
}

type NodeProps = {
  node: TreeNode;
  depth: number;
  isLast: boolean;
  pathLabel: string;
};

function collectLeafPaths(node: TreeNode, path: string[]): string[][] {
  if (!node.children || node.children.length === 0) {
    return [path];
  }
  return node.children.flatMap((child) =>
    collectLeafPaths(child, [...path, child.label.replace(" (K)", "").replace(" (P)", "")])
  );
}

const DEPTH_COLORS = [
  "border-zinc-400",
  "border-blue-400",
  "border-green-400",
  "border-orange-400",
];

function TreeNodeComponent({ node, depth, pathLabel }: NodeProps) {
  const colorClass = DEPTH_COLORS[depth % DEPTH_COLORS.length];
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-1">
        {depth > 0 && <div className="h-px w-6 bg-zinc-300 dark:bg-zinc-600" />}
        <div
          className={`rounded-lg border-2 ${colorClass} bg-white px-3 py-1 text-xs font-semibold text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100`}
          title={pathLabel ? `Sti: ${pathLabel}` : undefined}
        >
          <span>{node.label}</span>
          {depth > 0 && (
            <span className="ml-1 text-zinc-400 dark:text-zinc-500">({node.probability})</span>
          )}
        </div>
      </div>
      {hasChildren && (
        <div className="ml-6 mt-1 flex flex-col gap-1 border-l-2 border-dashed border-zinc-200 pl-2 dark:border-zinc-700">
          {node.children!.map((child, i) => (
            <TreeNodeComponent
              key={i}
              node={child}
              depth={depth + 1}
              isLast={i === node.children!.length - 1}
              pathLabel={pathLabel ? `${pathLabel} → ${child.label}` : child.label}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CountingTreeDemo() {
  const [experiment, setExperiment] = useState<ExperimentType>("mønt");
  const [coinDepth, setCoinDepth] = useState(2);

  const tree =
    experiment === "mønt"
      ? buildCoinTree(coinDepth)
      : buildDiceTree([1, 2, 3, 4, 5, 6]);

  const leafPaths = collectLeafPaths(tree, []);
  const totalLeaves = leafPaths.length;

  return (
    <div className="my-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        🌳 Tælletræ
      </h2>
      <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">
        Visualisér alle mulige udfald trin for trin. Hvert blad (slutpunkt) svarer til ét samlet udfald.
      </p>

      <div className="mb-5 flex flex-wrap gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            Eksperiment
          </label>
          <select
            value={experiment}
            onChange={(e) => setExperiment(e.target.value as ExperimentType)}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50"
          >
            {EXPERIMENT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {experiment === "mønt" && (
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Antal kast: <span className="font-semibold text-zinc-900 dark:text-zinc-50">{coinDepth}</span>
            </label>
            <input
              type="range"
              min={1}
              max={3}
              step={1}
              value={coinDepth}
              onChange={(e) => setCoinDepth(Number(e.target.value))}
              className="w-32 accent-zinc-900 dark:accent-zinc-50"
            />
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-max pb-2">
          <TreeNodeComponent node={tree} depth={0} isLast={false} pathLabel="" />
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Antal blade (samlede udfald): {totalLeaves}
        </p>
        {experiment === "mønt" && (
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            2^{coinDepth} = {totalLeaves} udfald. Produktreglen: {Array.from({ length: coinDepth }, () => "2").join(" · ")} = {totalLeaves}.
          </p>
        )}
        {experiment === "terning" && (
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            En terning har 6 udfald. Sandsynlighed for hvert: 1/6.
          </p>
        )}
        {experiment === "mønt" && totalLeaves <= 8 && (
          <div className="mt-2">
            <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Alle udfald:</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {leafPaths.map((path, i) => (
                <span
                  key={i}
                  className="rounded bg-zinc-200 px-2 py-0.5 text-xs font-mono text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100"
                >
                  {path.join("")}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
