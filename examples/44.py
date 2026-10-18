import ast;t=ast.parse('2+3*4',mode='eval');print(type(t.body.op).__name__,type(t.body.right.op).__name__)
