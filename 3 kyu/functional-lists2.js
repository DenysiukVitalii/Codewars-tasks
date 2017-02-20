function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() { return '()'; };
EmptyList.prototype.isEmpty = function() { return true; };
EmptyList.prototype.length = function() { return 0; };
EmptyList.prototype.push = function(x) { return new ListNode(x, this); };
EmptyList.prototype.remove = function(x) { return this; };
EmptyList.prototype.append = function(xs) { return xs; };

function ListNode(value, next) { this.v = value; this.n = next; }
ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { return false; };

ListNode.prototype.toString = function() {
var n = this.n;
var r = [this.v];
while (!n.isEmpty()) {
r.push(n.v);
n = n.n;
}
return '(' + r.join(' ') + ')';
};

ListNode.prototype.head = function() { return this.v; };
ListNode.prototype.tail = function() { return this.n; };
ListNode.prototype.length = function() { return 1 + this.n.length(); };
ListNode.prototype.push = function(x) { return new ListNode(x, this); };
ListNode.prototype.remove = function(x) {
var t = this.n.remove(x);
if (x == this.v) return t;
if (t == this.n) return this;
else return new ListNode(this.v, t);
};
ListNode.prototype.append = function(xs) { return new ListNode(this.v, this.n.append(xs)); };
