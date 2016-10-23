var data={ supplies: [ "broom", "mop", "cleaner" ] };
var template =
    `
        <ul>
          <% for(var i=0; i < data.supplies.length; i++) {%>
            <li><%= data.supplies[i] %></li>
          <% } %>
        </ul>
    `;


var parse = eval(compile(template));
console.log("1.原始字符串模板"+parse(data));

var template = `<ul>`+
    (data.supplies?data.supplies.map(function(item){
        return `<li>${item}</li>`;
    }).join(""):"")+
   `<ul>`;
console.log("2.ES6字符串模板"+template);



//原始字符串模板
function compile(template){
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script =
        `(function parse(data){
    var output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

    return script;
}