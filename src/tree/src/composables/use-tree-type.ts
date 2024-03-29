import { ComputedRef, Ref } from 'vue'
import { IInnerTreeNode, ITreeNode } from '../tree-type'

export type IUseCore = {
  expandedTree: ComputedRef<IInnerTreeNode[]>
  getChildren: (
    treeNode: IInnerTreeNode,
    startIndex?: number | undefined,
    isDirect?: boolean
  ) => IInnerTreeNode[]
  getDirectChildren: (treeNode: IInnerTreeNode) => IInnerTreeNode[]
  getChildrenExpanded: (treeNode: IInnerTreeNode) => IInnerTreeNode[]
  getIndex: (treeNode: IInnerTreeNode) => number
  getNode: (treeNode: IInnerTreeNode) => IInnerTreeNode | undefined
  getParent: (treeNode: IInnerTreeNode) => IInnerTreeNode | undefined
}

export type IUseToggle = {
  toggleNode: (treeNode: IInnerTreeNode) => void
}

export type IUseCheck = {
  toggleCheckNode: (treeNode: IInnerTreeNode) => void
}

export type IUseOperate = {
  append: (parent: IInnerTreeNode, node: IInnerTreeNode) => void
  remove: (node: IInnerTreeNode) => void
}

export type IUseLazyLoad = {
  lazyLoadNodes: (treeNode: IInnerTreeNode) => void
}

export type LazyNodeResults = {
  node: IInnerTreeNode
  treeItems: ITreeNode[]
}

// 拖拽
export type IDragdrop = boolean | IDropType
export interface IDropType {
  dropPrev?: boolean
  dropNext?: boolean
  dropInner?: boolean
}

export interface IUseDraggable {
  onDragStart: (event: DragEvent, treeNode: IInnerTreeNode) => void
  onDragOver: (event: DragEvent) => void
  onDragLeave: (event: DragEvent) => void
  onDrop: (event: DragEvent, treeNode: IInnerTreeNode) => void
  onDragEnd: (event: DragEvent) => void
}

export interface DragState {
  dropType?: keyof Required<IDropType>
  draggingNode?: HTMLElement | null
  draggingTreeNode?: IInnerTreeNode | null
}

export type TreeUtils = {
  treeDate: Ref<IInnerTreeNode[]>
} & IUseCore &
  IUseToggle &
  IUseCheck &
  IUseOperate &
  IUseDraggable
