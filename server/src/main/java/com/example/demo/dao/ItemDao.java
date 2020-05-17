package com.example.demo.dao;


import com.example.demo.model.Item;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository(value = "fakeItems")
public class ItemDao implements DAOUnit {

    private static List<Item> itemList = new ArrayList<>();

    @Override
    public void addItem(Item item) {
        itemList.add(item);
    }

    @Override
    public List<Item> getItems() {
        return itemList;
    }

    public void removeItem(Item item) {
        itemList.remove(item);
    }

}
