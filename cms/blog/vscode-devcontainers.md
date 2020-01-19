links:
- https://code.visualstudio.com/docs/remote/containers-advanced#_adding-environment-variables

cons:
- history lost when container closes
- mounting node_modules slow?
    - mounting individual root dirs/files means reloading/rebuilding the entire container when adding a new root dir/file 
- 