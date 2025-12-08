import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import BookCard from "../books/BookCard";
import { fetchBooks } from "../services/bookService";

export default function MaunPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const response = await fetchBooks();
        console.log("요청 목록 :", response.data);
        setBooks(response.data); 
      } catch (err) {
        console.error("도서 목록 불러오기 실패:", err);
      }
    };

    loadBooks();
  }, []);

  return (
    <Box>
      <h2>도서목록</h2>
      {/* 도서 목록 그리드 구현 (MUI Grid 핵심) */}
      {books.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
        ) : (
          <Grid container spacing={3}>
            {books.map((book) => (
              <Grid key={book.id}>
                <BookCard book={book} />
              </Grid>
            ))}
          </Grid>
      )}
    </Box>
  );
}
