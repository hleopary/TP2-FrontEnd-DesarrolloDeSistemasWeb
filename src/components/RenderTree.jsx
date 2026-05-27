export default function RenderTree({ nodes, depth = 0 }) {
  if (!nodes?.length) return null

  const isLast = (i) => i === nodes.length - 1

  return (
    <ul className="rt-list">
      {nodes.map((node, i) => (
        <li key={node.id || i} className="rt-item">
          <div
            className="rt-row"
            style={{ paddingLeft: `${depth * 1.8}rem` }}
          >
            <span className="rt-connector">
              {depth > 0 && (
                <>
                  <span className="rt-line">
                    {isLast(i) ? '└──' : '├──'}
                  </span>
                </>
              )}
            </span>
            <span className={`rt-label rt-label--${node.type || 'default'}`}>
              {node.label}
            </span>
            {node.hint && <span className="rt-hint">{node.hint}</span>}
          </div>
          {node.children && (
            <RenderTree nodes={node.children} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  )
}
