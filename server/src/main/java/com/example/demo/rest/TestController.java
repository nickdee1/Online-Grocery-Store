package com.example.demo.rest;

import com.example.demo.model.Item;
import com.example.demo.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController("/")
public class TestController {

    private final ItemService service;

    @Autowired
    public TestController(ItemService service) {
        this.service = service;
    }

    @PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void addItem(@RequestBody Item item) {
        service.addItem(item);
    }

    @GetMapping(value = "/items", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, List<Item>> getItems() {
        return service.getItems();
    }
}
