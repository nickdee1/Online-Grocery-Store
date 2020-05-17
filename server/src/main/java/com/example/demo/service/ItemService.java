package com.example.demo.service;


import com.example.demo.dao.DAOUnit;
import com.example.demo.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ItemService {

    private DAOUnit daoUnit;

    @Autowired
    public ItemService(@Qualifier("fakeItems") DAOUnit daoUnit) {
        this.daoUnit = daoUnit;
    }

    public void addItem(Item item) {
        daoUnit.addItem(item);
    }

    public Map<String, List<Item>> getItems() {
        Map<String, List<Item>> output = new HashMap<>();
        output.put("items", daoUnit.getItems());
        return output;
    }


}
