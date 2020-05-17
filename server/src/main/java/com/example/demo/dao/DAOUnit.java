package com.example.demo.dao;



import com.example.demo.model.Item;

import java.util.List;
import java.util.Map;

public interface DAOUnit {

    void addItem(Item item);

    List<Item> getItems();

    public void removeItem(Item item);
}
