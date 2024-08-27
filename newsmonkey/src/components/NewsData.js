import React, { useEffect, useState } from 'react';
import'./NewsData.css'
import NavBar from './NavBar';
import defaultImage from'./no-image.PNG'
export default function NewsData() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    CollectedData();
  }, []);

  const CollectedData = async () => {
  
      let result = await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb");
      let response = await result.json();
      setArticles(response.articles); 
    
  };
  const handleDropdownChange = async (event) => {
    event.preventDefault();
    const selectedValue = event.target.value;
    let apiUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb`;
    if (selectedValue) {
      apiUrl = selectedValue;
    }
    let result = await fetch(apiUrl);
    let response = await result.json();
    setArticles(response.articles); 
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [counts, setCounts] = useState(7);
  const totalPages = Math.ceil(articles.length / counts);

  const handlePageChange = (event,pageNumber ) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  const last = currentPage * counts;
  const first = last - counts;
  const articlesdata = articles.slice(first, last);


  const reverseDate = (dateString) => {
    const [year, month, day] = dateString.split('T')[0].split('-');
    if(month==="01"){
      return `${"Jan"}-${day}-${year}`;
    }

    if(month==="02"){
      return `${"Feb"}-${day}-${year}`;
    }
    if(month==="03"){
      return `${"Mar"}-${day}-${year}`;
    }
    if(month==="04"){
      return `${"Apr"}-${day}-${year}`;
    }

    if(month==="05"){
      return `${"May"}-${day}-${year}`;
    }
    if(month==="06"){
      return `${"June"}-${day}-${year}`;
    }
    if(month==="07"){
      return `${"July"}-${day}-${year}`;
    }
    if(month==="08"){
      return `${"Aug"}-${day}-${year}`;
    }
    if(month==="09"){
      return `${"Sept"}-${day}-${year}`;
    }
    if(month==="10"){
      return `${"Oct"}-${day}-${year}`;
    }
    if(month==="11"){
      return `${"Nov"}-${day}-${year}`;
    }
    else{
      return `${"Dec"}-${day}-${year}`;
    }
    
  };
  return (
    <> 
    <NavBar></NavBar>
    <div className='news-data-container'>
      <div className='header-dropdowndata'>
       <div className='header-container'>
<h4>News Monkey Top Headlines</h4>
</div>
<div className='dropdowndata'>
  <label>Filter-By:-</label>
<select onChange={handleDropdownChange}>
  <option value="">Select Category</option>
  <option value="https://newsapi.org/v2/everything?domains=bbc.co.uk,cnn.com,nytimes.com,reuters.com&q=politics&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb">Politics</option>
  <option value="https://newsapi.org/v2/everything?domains=bbc.co.uk,cnn.com,nytimes.com,reuters.com&q=sports&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb">Sports</option>
  <option value="https://newsapi.org/v2/everything?domains=bbc.co.uk,cnn.com,nytimes.com,reuters.com&q=business&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb">Business</option>
<option value="https://newsapi.org/v2/everything?domains=bbc.co.uk,cnn.com,nytimes.com,reuters.com&q=health&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb">Healthcare</option>
<option value="https://newsapi.org/v2/everything?domains=bbc.co.uk,cnn.com,nytimes.com,reuters.com&q=science&language=en&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb">Science</option>
<option value="https://newsapi.org/v2/everything?domains=bbc.co.uk,cnn.com,nytimes.com,reuters.com&q=technology&language=en&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb">Technology</option>
<option value="https://newsapi.org/v2/everything?domains=bbc.co.uk,cnn.com,nytimes.com,reuters.com&q=entertainment&language=en&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb&apiKey=0860ed5c106d4c41aaaa4ebd1bed62cb">Entertainment</option>
</select>
</div>

 </div>
        {articlesdata.map((article, index) => (
        
            <div className="card my-5" key={index}>
              <div className='card-contents'> 
            <div className='image-container'>
            <img src={article.urlToImage ? article.urlToImage : defaultImage} class="card-img-top" style={{width:"30rem",height:"100%"}}/>
       
            </div>
            <div className="card-body">
            <h5 className="card-title"> {article.title ? article.title.slice(0, 100) : "No title available"}
            {article.description && article.description.length > 100 ? '...' : ''}</h5>
              <p className="card-text"> {article.description ? article.description.slice(0, 200) : "No description available"}
              {article.description && article.description.length > 200 ? '...' : ''}</p>
         
              <a href={article.url} className="btn" target='_blank'>Read More</a>
              <p className='date'>Posted-On:{reverseDate(article.publishedAt)}</p>
            </div>
          </div>
          </div>
        ))}
<div className='buttons-container d-flex justify-content-between'>
<button type="button" class="btn btn-dark"  onClick={(event) => handlePageChange(event, currentPage - 1)}>Previous</button>
<button type="button" class="btn btn-dark"onClick={(event) => handlePageChange(event, currentPage + 1)}>Next</button>
</div>
    </div>


<div className='footer-container'>
<p className='footer-data'>© 2024 News Monkey/Gaurav-Pujari. All rights reserved.</p>
</div>
    </>
  );
}
