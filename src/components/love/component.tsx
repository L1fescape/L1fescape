import * as React from 'react'
import { ViewSource } from 'ak.gg/components'

export interface LoveProps {
  source?: string
}

export const Love: React.FC<LoveProps> = ({ source }) => (
  <div className="love">
    <p>
      Made with ♥ in <span title="San Francisco, CA">SF</span>
    </p>
    {source && (
      <p className="source">
        <ViewSource source={source} />
      </p>
    )}
  </div>
)
