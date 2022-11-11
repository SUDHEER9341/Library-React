import React from 'react'
import axios from "axios";
import Books from './Books';
function Home() {
    const getdetails=async () => {
        const x=await axios.get("https://api.itbook.store/1.0/new");
        console.log(x.data.books);
            }
  return (
    <div>
         <div className='main'>
        <center>
          <h1>LIBRARY MANAGEMENT SYSTEM.
          </h1>
        </center>
        <center>
          <button type="button" onClick={getdetails}>list of books</button><br/>
        </center><br/><br/>

        <table >
          <tr>
            <td>Title:</td>
            <td><input type="text" id="title" /></td>
            <td><button type="button" onClick={null}>Click</button></td>
          </tr>
          <tr>
            <td>Author:</td>
            <td><input type="text" id="Author" /></td>
            <td><button type="button" onclick="author()">Click</button></td>
          </tr>
          <tr>
            <td>Subject:</td>
            <td><input type="text" id="subject" /></td>
            <td><button type="button" onclick="subject()">Click</button></td>
          </tr>
          <tr>
            <td>Year:</td>
            <td><input type="text" id="Year" /></td>
            <td><button type="button" onclick="year()">Click</button></td>
          </tr>
        </table>

        <p id="p"></p>
      </div>
    </div>
  )
}

export default Home