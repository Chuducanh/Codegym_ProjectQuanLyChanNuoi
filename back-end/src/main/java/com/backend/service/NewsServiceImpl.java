package com.backend.service;

import com.backend.model.News;
import com.backend.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewsServiceImpl implements INewsService<News>{
    @Autowired
    private NewsRepository newsRepository;


    @Override
    public List<News> findAll() {
        return newsRepository.findAll();
    }

    @Override
    public Optional<News> findById(Long id) {
        return newsRepository.findById(id);
    }

    @Override
    public void save(News news) {
        newsRepository.save(news);
    }

    @Override
    public void delete(Long id) {
        newsRepository.deleteById(id);
    }

    @Override
    public void update(Long id, News news) {
        news.setId(id);
        newsRepository.save(news);
    }
}
