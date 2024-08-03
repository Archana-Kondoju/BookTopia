import React, { useState, useEffect } from 'react';
import { BooksContainer,WelcomeSection, ButtonSearch, CostLikeContainer, HomeBox, ImagesContainer, InputField, LikeButton, SearchBox, StyledImage} from './styledHome';
import axios from 'axios';
import {FaSearch} from 'react-icons/fa';
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './../Welcome/welcome';
import Cookies from 'universal-cookie';
// import Book from './../Books/books';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [books,setBooks]=useState([]);
    const [search,setSearch]=useState("");
    const [filteredBooks,setFiltered]=useState([]);
    const [liked,setLiked] =  useState([]);
    const cookies=new Cookies();
    const navigate = useNavigate();

    useEffect(() => {
        const bookData=async()=>{
            try{
                const {data}=await axios.get(`http://localhost:3000/`);
                setBooks(data);
                setFiltered(data);
                const cookie=new Cookies();
                const token=cookie.get('jwtToken');
                if(!token){
                    setLiked([]);
                }else{
                    const {likeddata}=await axios.post('http://localhost:3000/:id',{token:token});
                    setLiked(likeddata.data);
                }
            }
            catch(error){
                setFiltered([]);
            }
        }
        bookData();
    },[]);
    const getAuthor=(authors)=>{
        const author=authors.split(',');
        return author[0];
    }
    const getLiked=(id)=>{
        const isLikedBook=liked.find(book=>book._id===id);
        return isLikedBook?true:false;
    }
    const handleLike=async(id)=>{
        const cookies=new Cookies();
        const token=cookies.get('jwtToken');
        if(!token){
            toast.error('Please Login');
            return;
        }
        try{
            if(!token) throw new Error('Please Login');
            await axios.post(`http://localhost:3000/${id}`,{token:token});
        }
        catch(error){
            toast.error(`Please Login`);
        }
        const book=filteredBooks.find(book=>book._id===id);
        const like=book.isLiked;
        setFiltered(prevBooks =>{
            return prevBooks.map(book=>{
                if(book._id===id){
                    return {...book,isLiked:!like};
                }
                return book;
            });
        });
        const likedData=await axios.post('http://localhost:3000/:id',{token:token});
        setLiked(likedData.data);
    }
    const handleSearch=(e)=>{
        setSearch(e.target.value);
        let filtered=books;
        if(e.target.value!==''){
            filtered=books.filter(book=>
                book.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        setFiltered(filtered);
    }
    const handleBookView=(id)=>{
        const token=cookies.get('jwtToken');
        if(!token){
            toast.error('Please Login');
        }
        else{
            navigate(`/books/${id}`);
        }
    }
    return (
        <HomeBox>
            <ToastContainer/>
            <WelcomeSection>  
            <SearchBox role="search">
                <InputField className="form-control" type="search" placeholder="Search Here" onChange={handleSearch} value={search} aria-label="Search"/>
                <ButtonSearch className="btn btn-outline-success" type="submit"><FaSearch/></ButtonSearch>
            </SearchBox>
            </WelcomeSection>

            {/* <SearchBox>
                <InputField type='text' placeholder='Search Here' onChange={handleSearch} value={search}/>
                <ButtonSearch><FaSearch/></ButtonSearch>
            </SearchBox> */}
            {search && <h1 style={{color:'black', textAlign:'center',fontSize:22}}>{filteredBooks.length} books found</h1>}
            <Welcome/>               
            <BooksContainer>
        {Array.isArray(filteredBooks) && filteredBooks &&  filteredBooks.map((book) => (
              <ImagesContainer key={book._id} >
                <StyledImage src={book.image} alt="bookimg" onClick={()=> handleBookView(book._id)}></StyledImage>
                  <h1 style={{fontSize:18,
                      textAlign:'center'}}>
                    {book.title}</h1>
                    <p style={{textAlign:'center',marginTop:0}}>by: <q>{getAuthor(book.authors)}</q></p>
                    <CostLikeContainer>
                      <button style={{border:'none',borderRadius:4,backgroundColor:'yellowgreen',
                        color:'black',fontSize:15,height:22,width:40}}>{book.price===0? `Free`:`$${book.price}`}</button>
                      <LikeButton onClick={()=>handleLike(book._id)}>
                          {getLiked(book._id)===true ?
                            <AiOutlineLike  size={22} 
                            // onClick={()=>handleRemoveLiked(book._id)}
                            />:
                          <AiFillLike size={22}/>}
                      </LikeButton> 
                    </CostLikeContainer>
              </ImagesContainer>
            ))} 
          </BooksContainer>
        </HomeBox>       
    );
}
 
export default Home;