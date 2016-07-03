var Node = function(name) {
    var that = this;
    that.name = name;
    that.children = [];
    read_prop(Node, that.children);
};

Node.prototype.addChild = function(name) {
    var that = this;
    var child = new Node(name);
    that.children.push(child);
};

var B = new Node("B"); //parent
B.addChild("C"); //child
B.addChild("E"); //child
var E;
var C = new Node("C"); //parent
C.addChild("F"); //child
var F;
var A = new Node("A");//parent, but it doesn't have a parent, so it's the root
A.addChild("B"); //child
//console.log("a", A['children']); //gives the child node, which is B
var child_of_A_array = A['children']; //[Node]
//console.log(child_of_A_array['0']); //Node {name: "B", children: Array[0]}
var child_of_A_object = child_of_A_array['0'];
//console.log(child_of_A_object['name']);// B
// console.log("b", B);
// console.log("c", C);

var nodes = [B,C,A,E,F];

// function read_prop(obj, prop) {
//     return obj[prop];
// }

//find node(s) with no parents
var find_children = function () {
    var possible_root_nodes =[];
    var children = [];

    for (var i = 0; i < nodes.length; i++){

            //if a node does not have children, it cannot be a parent, and therefore cannot be the root
            if (nodes[i] != undefined){
            //console.log("nodes", nodes[i]); //these nodes have children: B, C, A
            //console.log("name", nodes[i]['name']); //B, C, A
            var have_children = nodes[i]['name'];//B, C, A

            //console.log("have_children", have_children);
            var children_names = have_children['0']['Node'];
            //console.log("children_names", children_names);
                //make sure that we're not adding the same node twice to the possible_root_nodes array
                if(have_children.indexOf(nodes[i]['name']) != -1 ){
                    possible_root_nodes.push(nodes[i]);
                }
              }
            }
            //search for these node names in the children, if one of them is not a child, it is the root
            //console.log("possible_root_nodes", possible_root_nodes); //[Node, Node, Node]
            //var x = possible_root_nodes[0]; //Node {name: "B", children: Array[2]}
            //var x = possible_root_nodes[1]; //Node {name: "C", children: Array[1]}
            //var x = possible_root_nodes[2]; //Node {name: "A", children: Array[1]}
            //console.log("x", x);
            //var y = x['name']; //A
           // var y = x['children']; //[Node]
            //console.log("y", y);
            //var child_name = y['0']['name']; //B!!!
            //console.log("child_name", child_name);

            for (var i = 0; i < possible_root_nodes.length; i++){
                var x = possible_root_nodes[i];
                //console.log("x", x);
                var y = x['children'];
                //console.log("y", y);
                var child_name = y['0']['name'];
                //console.log("child_name", child_name); //C, F, B
                children.push(child_name); //["C", "F", "B"]

                //tried to push E into the children array, but couldnt but
                //doesn't really matter since I disqualified E as it doesn't have children,
                //so it cannot be the root:
                // var second_child = y['1']; //Node {name: "E", children: Array[0]}
                // var second_child_name = second_child['name'];
                // //console.log("hey", second_child_name); //E
                // if (second_child_name === undefined){
                //     continue;
                // }else {
                //     console.log("second child name", second_child_name);
                // }
            }

            for (var i = 0; i < have_children.length; i++){
                 if (have_children[i].indexOf(children) === -1){
                     console.log("I am the root!", have_children[i]);
                }
            }

};
find_children();
//console.log(children);