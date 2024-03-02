"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AVLNode_1 = __importDefault(require("./AVLNode"));
class AVLTree {
    root;
    constructor() {
        this.root = null;
    }
    //height method
    getHeight(node) {
        return node ? node.height : 0;
    }
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
    getBalancingFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
    //insertion Method : public(call the private method inside of it)
    insert(std_id, marks) {
        this.root = this.insertData(this.root, std_id, marks);
    }
    //insertion method(real implementation of the insert)
    insertData(node, std_id, marks) {
        if (!node) {
            return new AVLNode_1.default(std_id, marks);
        }
        else if (std_id < node.std_id) {
            node.left = this.insertData(node.left, std_id, marks);
        }
        else if (std_id > node.std_id) {
            node.right = this.insertData(node.right, std_id, marks);
        }
        else {
            return node;
        }
        this.updateHeight(node);
        let balance = this.getBalancingFactor(node);
        if (balance > 1) {
            let select = node.left;
            if (std_id < select.std_id) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) {
            let select = node.right;
            if (std_id > select.std_id) {
                return this.leftRotate(node);
            }
            else {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }
        }
        return node;
    }
    rightRotate(node) {
        let x = node.left;
        let T2 = x.right;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    leftRotate(node) {
        let x = node.right;
        let T2 = x.left;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.std_id);
            this.inOrderTraversal(node.right);
        }
    }
    //search function
    searchNode(node, id) {
        if (!node || node.std_id == null) {
            return false;
        }
        if (node.std_id == id) {
            return true;
        }
        else if (node.std_id < id) {
            this.searchNode(node.right, id);
        }
        else if (node.std_id > id) {
            this.searchNode(node.left, id);
        }
        return false;
    }
    //nodeCount method
    coutNodes(node) {
        let nodeCount = 0;
        if (!node) {
            nodeCount = 0;
        }
        else {
        }
        return nodeCount;
    }
}
exports.default = AVLTree;
