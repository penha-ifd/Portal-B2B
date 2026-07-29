import svgPaths from '../../imports/Web1350X690/svg-0c0o9n4wno';

/** Marca "piscadela" iFood reaproveitada do design importado. */
export function IFoodMark({ size = 20 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 20 20"
        preserveAspectRatio="none"
        aria-label="iFood"
      >
        <g opacity="0.9">
          <path d={svgPaths.p392e2e00} fill="#EB0033" />
          <path d={svgPaths.p10bfbe00} fill="#EB0033" />
          <path d={svgPaths.p37304400} fill="#EB0033" />
        </g>
      </svg>
    </div>
  );
}
