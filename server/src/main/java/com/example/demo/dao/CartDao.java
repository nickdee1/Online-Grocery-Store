package com.example.demo.dao;

import com.example.demo.model.Cart;
import com.example.demo.model.Item;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Repository("fakeCart")
public class CartDao implements DAOUnit {

    @PersistenceContext
    private EntityManager manager;
    private Class<Cart> type = Cart.class;
    private Class<Item> itemType = Item.class;


    @Override
    public void addItem(Item item) {
        Objects.requireNonNull(item);
        Cart cart = getCart();
        cart.getItemList().add(item);
        manager.merge(cart);
    }

    @Override
    public List<Item> getItems() {
        Cart cart = getCart();
        return cart.getItemList();
    }

    @Override
    public void removeItem(Item item) {

    }

    private Cart getCart() {
        return manager.find(type, 0);
    }

}
