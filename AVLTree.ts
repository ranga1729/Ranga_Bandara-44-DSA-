import AVLNode from "./AVLNode";

class AVLTree
{
    public root:AVLNode | null;

    constructor()
    {
        this.root = null;
    }

    //height method
    public getHeight(node:AVLNode|null):number
    {
        return node ? node.height : 0 
    }

    private updateHeight(node:AVLNode):void
    {
        node.height=1+Math.max(this.getHeight(node.left),this.getHeight(node.right))
    }

    private getBalancingFactor(node:AVLNode):number
    {
        return this.getHeight(node.left)-this.getHeight(node.right);
    }

    //insertion Method : public(call the private method inside of it)
    public insert(std_id:number, marks:object):void
    {
        this.root = this.insertData(this.root, std_id, marks);
    }
    //insertion method(real implementation of the insert)
    private insertData(node:AVLNode|null, std_id:number, marks:object):AVLNode
    {
        if(!node){
            return new AVLNode(std_id, marks);
        }
        else if(std_id<node.std_id){
            node.left = this.insertData(node.left, std_id, marks);
        }
        else if(std_id>node.std_id){
            node.right = this.insertData(node.right, std_id, marks);
        }
        else{
            return node;
        }
        this.updateHeight(node);

        let balance:number = this.getBalancingFactor(node);
        if(balance > 1){ 
            let select = node.left as AVLNode; 
            if(std_id < select.std_id){
                return this.rightRotate(node);
            }
            else{
                node.left = this.leftRotate(node.left as AVLNode);
                return this.rightRotate(node);
            }

        }
        else if(balance < -1){ 
            let select = node.right as AVLNode; 
            if(std_id > select.std_id){
                return this.leftRotate(node);
            }
            else{
                node.right = this.rightRotate(node.right as AVLNode);
                return this.leftRotate(node);
            }
        }
        return node;
    }

    private rightRotate(node:AVLNode):AVLNode
    {
        let x:AVLNode=node.left as AVLNode;
        let T2=x.right as AVLNode;
        x.right = node;
        node.left=T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    private leftRotate(node:AVLNode):AVLNode
    {
        let x:AVLNode=node.right as AVLNode;
        let T2=x.left as AVLNode;
        x.right = node;
        node.left=T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    public inOrderTraversal(node :AVLNode |null): void
    {
        if(node)
        {
            this.inOrderTraversal(node.left);
            console.log(node.std_id) 
            this.inOrderTraversal(node.right);               
        }
    }

    //search function
    public searchNode(node: AVLNode, id:number): boolean{

        if(!node || node.std_id == null){
            return false;
        }
        if(node.std_id == id){
            return true;
        }
        else if(node.std_id < id){
            this.searchNode(node.right as AVLNode, id);
        }
        else if(node.std_id > id){
            this.searchNode(node.left as AVLNode, id);
        }
        return false;
    }

    //nodeCount method
    public coutNodes(node:AVLNode | null):number{
        let nodeCount:number=0;
        if(!node){
            nodeCount = 0;
        }
        else{
        }

        return nodeCount;
    }
  
}
export default AVLTree; 