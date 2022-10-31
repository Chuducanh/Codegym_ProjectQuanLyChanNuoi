package com.backend.repository;

import com.backend.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NewsRepository extends JpaRepository<News, Long> {
    @Override
    @Query(value = "select n.* from news n", countQuery = "select n.* from news", nativeQuery = true)
    List<News> findAll();

    @Override
    @Query(value = "select n.* from news n\n" +
            " where n.id=?1", countQuery = "select n.* from news n where n.id=?1", nativeQuery = true)
    Optional<News> findById(Long id);


    @Query(value = "insert into news (`author`, `content`, `date_create`, `first_sentence`, `source_url`, `title`) " +
            "VALUES (?1.getAuthor(),?1.getContent(),?1.getDateCreate(),?1.getFirstSentence(),?1.getSource_url(),?1.getTitle());",nativeQuery = true)
    void saveNews(News entity);

    @Override
    @Modifying
    @Query(value = "delete from news n\n" +
            " where n.id=?1", nativeQuery = true)
    void deleteById(Long id);
}
