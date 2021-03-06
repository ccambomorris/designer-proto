import { XYPosition, Dimensions, ElementData } from './flow'
import { NodeHandleBounds, Node } from './node'
import { Edge } from './edge'

export type NodeDimensionChange = {
  id: string
  type: 'dimensions'
  dimensions: Dimensions
  handleBounds?: NodeHandleBounds
}

export type NodePositionChange = {
  id: string
  type: 'position'
  position?: XYPosition
  dragging?: boolean
}

export type NodeSelectionChange = {
  id: string
  type: 'select'
  selected: boolean
}

export type NodeRemoveChange = {
  id: string
  type: 'remove'
}

export type NodeAddChange<Data = ElementData> = {
  item: Node<Data>
  type: 'add'
}

export type NodeResetChange<Data = ElementData> = {
  item: Node<Data>
  type: 'reset'
}

export type NodeChange =
  | NodeDimensionChange
  | NodePositionChange
  | NodeSelectionChange
  | NodeRemoveChange
  | NodeAddChange
  | NodeResetChange

export type EdgeSelectionChange = NodeSelectionChange
export type EdgeRemoveChange = NodeRemoveChange
export type EdgeAddChange<Data = ElementData> = {
  item: Edge<Data>
  type: 'add'
}
export type EdgeResetChange<Data = ElementData> = {
  item: Edge<Data>
  type: 'reset'
}
export type EdgeChange = EdgeSelectionChange | EdgeRemoveChange | EdgeAddChange | EdgeResetChange
export type ElementChange = NodeChange | EdgeChange
