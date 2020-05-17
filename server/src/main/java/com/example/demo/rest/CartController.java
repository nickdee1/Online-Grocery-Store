package com.example.demo.rest;

import com.example.demo.model.Item;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController("/cart")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
public class CartController {

    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping(value = "/cart/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void addItem(@RequestBody Item item) {
        cartService.addItem(item);
    }

    @GetMapping(value = "/cart/items", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, List<Item>> getItems() {
        return cartService.getItems();
    }

    @GetMapping(value = "/count")
    public Double getPrice() {
        return cartService.countPrice();
    }

}
