class AVLNode
{
    std_id: number;
    left: AVLNode | null;
    right: AVLNode | null;
    height: number;

    //marks object
    marks: object;

    constructor(std_id:number, marks:object)
    {
        this.std_id = std_id;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.marks = marks;
    }
}
export default AVLNode;