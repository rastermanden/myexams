import type { DocBlock, DocFigure } from "@/lib/types";
import { DisplayTex, InlineText } from "./Tex";
import {
  ArrowsFigure,
  ColumnFigure,
  GridFigure,
  StickFigure,
} from "./ArithmeticFigures";
import { PieRow, TriangleDiagram, UnitCircleDiagram } from "./GeometryFigures";

function Figure({ figure }: { figure: DocFigure }) {
  switch (figure.kind) {
    case "columns":
      return <ColumnFigure rows={figure.rows} />;
    case "arrows":
      return (
        <ArrowsFigure
          left={figure.left}
          fromIndex={figure.fromIndex}
          operator={figure.operator}
          right={figure.right}
          italic={figure.italic}
        />
      );
    case "grid":
      return <GridFigure header={figure.header} rows={figure.rows} />;
    case "stick":
      return (
        <StickFigure
          divisor={figure.divisor}
          steps={figure.steps}
          remainder={figure.remainder}
        />
      );
    case "pies":
      return <PieRow pies={figure.pies} />;
    case "triangle":
      return <TriangleDiagram figure={figure} />;
    case "unitCircle":
      return <UnitCircleDiagram figure={figure} />;
  }
}

/**
 * Gengiver de opsatte blokke i et afsnit. Selve typografien kommer fra
 * `.latex-doc`, som ConceptSection lægger uden om.
 */
export default function DocBlocks({ blocks }: { blocks: DocBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "text":
            return (
              <p key={i}>
                <InlineText text={block.text} />
              </p>
            );

          case "math":
            return <DisplayTex key={i} tex={block.tex} />;

          case "list": {
            const items = block.items.map((item, j) => (
              <li key={j}>
                <InlineText text={item} />
              </li>
            ));
            return (
              <div key={i} className="latex-list">
                {block.title && (
                  <p className="latex-list-title">
                    <InlineText text={block.title} />
                  </p>
                )}
                {block.ordered ? <ol>{items}</ol> : <ul>{items}</ul>}
              </div>
            );
          }

          case "figure":
            return (
              <figure key={i} className="latex-figure">
                <Figure figure={block.figure} />
                {block.caption && (
                  <figcaption>
                    <InlineText text={block.caption} />
                  </figcaption>
                )}
              </figure>
            );

          case "figureRow":
            return (
              <div key={i} className="latex-figure latex-figure-row">
                {block.figures.map((figure, j) => (
                  <Figure key={j} figure={figure} />
                ))}
              </div>
            );
        }
      })}
    </>
  );
}
