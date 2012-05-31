<?php

class MenuItem {
    private $name = null;
    private $parent = null;
    
    public function __construct($name) {
        $this->name = $name;
    }
    
    public function __toString() {
        return __CLASS__." with prop1 = ".$this->prop1;
    }
    
    public function setName($new_value) {
        $this->name = $new_value;
    }
    
    public function getName() {
        return $this->name;
    }
    
    public function setParent($new_value) {
        $this->parent = $new_value;
    }
    
    public function getParent() {
        return $this->parent;
    }
    
    public function getSlug() {
        $slug = str_replace(' ', '-', strtolower($this->name)).'/';
        if ($this->parent == null) {
            return '/'.$slug;
        } else {
            return $this->parent->getSlug().$slug;
        }
    }
}

?>