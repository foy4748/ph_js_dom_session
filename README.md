# Concept of DOM

DOM stands for **Document Object Model**    

### Document

The Document refers to the HTML. HTML maintains a tree-like structure, parent-child relationship between the elements / HTML tags, which are rendered / displayed by browser. Using the structure it can render some content such as text, images, videos etc. But only rendering content is not enough, we need to detect the user interaction such as clicking, hovering, focusing on some HTML element / tag. Then based on the interaction, we may have to change some content of HTML. 

### Object Model

To change some content of the HTML, based on JavaScript, first of all JavaScript needs to know what's currently rendering / displaying on the browser. HTML is simply text that gives browser instructions what should be rendered. Browser converts this HTML into an **Object** which holds all the informations about the HTML document. This **Object** still maintains the tree-like structure and parent-child relationship, which can be read and updated by JavaScript. Also, JavaScript is capable of creating, reading, updating or deleting any parts of the **Object** . 

Since the **Object** represents the document, that's why its called a **Model**.

# Simplified Object Representation

Suppose we have a simple HTML like this
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Learn DOM operations</title>
  </head>
  <body>
    <header class="text-right">
      <h1>Shopping Cart</h1>
    </header>
    <main>
        <p> Some contents </p>
    </main>
    <footer class="text-center">
      <small>Learn DOM manipulation</small>
    </footer>
    <script src="/assets/js/index.js"></script>
  </body>
</html>
```


Then The possible simplified Object representation of the Docuemnt is
```json
{
    html:{
        childNodes: [
            {
                head:{
                    childNodes: [
                        {
                            title: {
                                textContent: Learn DOM operations
                            }
                        }
                    ]
                } 
            },
            {
                body: {
                    childNodes: [
                        {

                            header: {
                                className: 'text-right'
                                childNodes: [
                                    {
                                        h1: {
                                            textContent: "Shopping Cart"
                                        }
                                    }
                                ]
                            }
                        }
                ]
                }
            }
            //..... rest of the elements
        ]
    }
}
```