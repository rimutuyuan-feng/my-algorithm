/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

function sumNumbers(root: TreeNode | null): number {
	if (!root) {
		return 0
	}
	let result = 0
	function process(str: string, node: TreeNode) {
		if (!node.left && !node.right) {
			result += Number(str + node.val)
			return
		}
		if (node.left) process(str + node.val, node.left)
		if (node.right) process(str + node.val, node.right)
	}
	process('', root)
	return result
}
