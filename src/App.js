import React from 'react';
 
import marked from 'marked';

const initialState = `
 this is a paragraph 
 **this is a bolded text **

 #Heading
 ## Heading 2
 
 - list item 1
 - list item 2
 - list item 3

 [visit my website ](https:aburrahhmangad.com)


 this is inline \`<div></div>\`

 this is a blck code 
 \`\`\`

   let x = 1;
   let y = 2;
   let z = x + y ;

 \`\`\`


 ![React](http://goo.gl/3434)

`;
    

class  App extends React.Component {
  
  

  state = {
    text:initialState
  }
   
  handleChange = (e) => {
      this.setState({
        text:e.target.value
      });
  }

  render(){
    const { text } = this.state;
    const markdown = marked(text, { breaks:true});
    console.log(markdown);
    
    return (
      <div className="bg-secondary">
         <h1 className="text-center">Convert your markdown </h1>
         <div className="row p-5">
               <div className="col-6">  
                  <textarea 
                    id="editor" 
                    cols="60" 
                    rows="10"
                    className="p-2"
                    value={text}
                    onChange={(e)=>this.handleChange(e)}
                    ></textarea>
                </div>
                <div className="col-6 bg-white" >  
                  <h3> See the  result : </h3>
                  <div
                     className="preview" 
                     id="preview"
                 //   dangerouslySetInnerHTML={{__html:markdown}}
                    > 
                     {markdown}
                    </div>
                
                </div>
         </div>

      </div>
    );
  }
}

export default App;


