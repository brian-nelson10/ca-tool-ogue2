import { openDB } from 'idb';

import 'regenerator-runtime/runtime';

export const saveIndexedDB = async () => {
    openDB('user_db', 1, {
        upgrade(db) {
        if (db.objectStoreNames.contains('users')) {
            console.log('users store already exists');
            return;
        }
        db.createObjectStore('users', {keyPath: 'id', autoIncrement: true });
        console.log('users store created');
    }
    })
};

  // Export a function we will use to GET to the database.
  export const getIndexedDb = async (id) => {
    console.log('GET from the database');
  
    // Create a connection to the IndexedDB database and the version we want to use.
    const userDb = await openDB('user_db', 1);
  
    // Create a new transaction and specify the store and data privileges.
    const tx = userDb.transaction('users', 'readonly');
  
    // Open up the desired object store.
    const store = tx.objectStore('users');
  
    // Use the .getAll() method to get all data in the database.
    const request = store.getKey(id);
  
    // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
    return result;
  };

  // Export a function we will use to POST to the database.
export const postIndexedDb = async (username, password) => {
    console.log('POST to the database');
  
    // Create a connection to the database and specify the version we want to use.
    const userDb = await openDB('user_db', 1);
  
    // Create a new transaction and specify the store and data privileges.
    const tx = userDb.transaction('users', 'readwrite');
  
    // Open up the desired object store.
    const store = tx.objectStore('users');
  
    // Use the .add() method on the store and pass in the content.
    const request = store.add({ username: username, password: password });
  
    // Get confirmation of the request.
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  };






export const initdb = async () => {
    // We are creating a new database named 'contact_db' which will be using version 1 of the database.
    openDB('tool_db', 1, {
      // Add our database schema if it has not already been initialized.
      upgrade(db) {
        if (db.objectStoreNames.contains('tools')) {
          console.log('tools store already exists');
          return;
        }
        // Create a new object store for the data and give it a key name of 'id' which will increment automatically
        db.createObjectStore('tools', { keyPath: 'id', autoIncrement: true });
        console.log('tools store created');
      }
    })
  };

  // Export a function we will use to GET to the database.
export const getDb = async () => {
    console.log('GET from the database');
  
    // Create a connection to the IndexedDB database and the version we want to use.
    const toolDb = await openDB('tool_db', 1);
  
    // Create a new transaction and specify the store and data privileges.
    const tx = toolDb.transaction('tools', 'readonly');
  
    // Open up the desired object store.
    const store = tx.objectStore('tools');
  
    // Use the .getAll() method to get all data in the database.
    const request = store.getAll();
  
    // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
    return result;
  };

  // Export a function we will use to POST to the database.
export const postDb = async (name, type, checkedOutBy) => {
    console.log('POST to the database');
  
    // Create a connection to the database and specify the version we want to use.
    const toolDb = await openDB('tool_db', 1);
  
    // Create a new transaction and specify the store and data privileges.
    const tx = toolDb.transaction('tools', 'readwrite');
  
    // Open up the desired object store.
    const store = tx.objectStore('tools');
  
    // Use the .add() method on the store and pass in the content.
    const request = store.add({ name: name, type: type, checkedOutBy: checkedOutBy });
  
    // Get confirmation of the request.
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  };

  export const deleteDb = async (id) => {
    console.log('DELETE from the database', id);
  
    // Create a connection to the IndexedDB database and the version we want to use.
    const toolDb = await openDB('tool_db', 1);
  
    // Create a new transaction and specify the store and data privileges.
    const tx = toolDb.transaction('tools', 'readwrite');
  
    // Open up the desired object store.
    const store = tx.objectStore('tools');
  
    // Use the .delete() method to get all data in the database.
    const request = store.delete(id);
  
    // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
    return result?.value;
  };

  // EXPORTED EDIT function
export const editDb = async (id, name, type, checkedOutBy) => {
    console.log('PUT to the database');
  
    const toolDb = await openDB('tool_db', 1);
  
    const tx = toolDb.transaction('tools', 'readwrite');
  
    const store = tx.objectStore('tools');
  
    const request = store.put({ id: id, name: name, type: type, checkedOutBy: checkedOutBy });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  };