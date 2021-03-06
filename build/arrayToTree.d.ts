export interface Item {
    id?: string;
    parentId?: string | null;
    [key: string]: any;
}
export interface TreeItem {
    id?: string;
    parentId?: string | null;
    [key: string]: Item | any;
    children: TreeItem[];
}
export interface Config {
    id: string;
    parentId: string;
    dataField: string | null;
}
/**
 * Unflattens an array to a tree with runtime O(n)
 */
export declare function arrayToTree(items: Item[], config?: Partial<Config>): TreeItem[];
