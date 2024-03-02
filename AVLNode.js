"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AVLNode {
    std_id;
    left;
    right;
    height;
    //marks object
    marks;
    constructor(std_id, marks) {
        this.std_id = std_id;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.marks = marks;
    }
}
exports.default = AVLNode;
