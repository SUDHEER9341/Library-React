import './App.css';
import Books from './Books';
import Home from './Home';
import './style.css';
import { Routes, Route } from "react-router-dom";
import Login from './Login';


function App() {
  const books=[["Algorithms","sudheer","DS","2012"],["c","sudheer","DS","2002"],["Algorithms","nivedh","DAA","2004"],
                        ["M1","Ramanujan","Mathematics","1995"],["engineering mechanics","newton","Physics","2002"],
                        ["Inorginc chemistry","werner","Chemistry","2000"],["M2","raman","Mathematics","2003"],
                        ["scheduling algorithms","Andrew","Operating systems","2012"],["Python datatypes","eric","Python","2000"],
                        ["intro to automata","john","Automata","1990"],["html","jon","web","2000"],["communications","bharath","Networks","2010"],
                        ["process models","suvarna","software engineering","2000"],["economics","engineering","lohith","2001"]];
    
  //           var y=books.length;
  //           // function list()
  //           // {
  //           //     var x=document.getElementById("title").value;
                
  //           //     for(var i=0;i<y;i++)
  //           //     {
  //           //         if(x==books[i][0])
  //           //         {
  //           //             document.write(books[i]);
  //           //             document.write("</br>");
  //           //         }
  //           //     }
            
                
  //           //}
  //           const list = () => {
  //             return <Books/>
  //           }
  //           function author()
  //           {
  //               var x=document.getElementById("Author").value;
                
  //               for(var i=0;i<y;i++)
  //               {
  //                   if(x==books[i][1])
  //                   {
  //                       document.write(books[i]);
  //                       document.write("</br>");
  //                   }
  //               }
             
  //           }

  //           function subject()
  //           {
  //               var x=document.getElementById("subject").value;
                
  //               for(var i=0;i<y;i++)
  //               {
  //                   if(x==books[i][2])
  //                   {
  //                       document.write(books[i]);
  //                       document.write("</br>");
  //                   }
  //               }
  //           }

  //           function year()
  //           {
  //               var x=document.getElementById("Year").value;
                
  //               for(var i=0;i<y;i++)
  //               {
  //                   if(x==books[i][3])
  //                   {
  //                       document.write(books[i]);
  //                       document.write("</br>");
  //                   }
  //               }
                
  //           }
            
  //           function test()
  //           {
  //                   document.write("List Of books:");
  //                   document.write("<br><br>");
  //                   for(var i=0;i<y;i++)
  //                   {
  //                   document.write("<tr><td>"+books[i][0]+",</td>");
  //                   document.write("<td>" + books[i][1] + ",</td>");
  //                   document.write("<td>" + books[i][2] + ",</td>");
  //                   document.write("<td>" + books[i][3] + "</td></tr>");
  //                   document.write("<br><br>")
  //                   } 
                
  //           }
  // return (
  //   <div className="App">
     
  //   </div>
  //)
  return (
    
    <Routes>
      
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login/>}/>
      {/* <Route
        path="/admin/updatepassword"
        element={<AdminFirstTimePassword />}
      /> */}
    </Routes>
  )
}

export default App;
