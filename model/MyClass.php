<?php

class MyClass {
    private $prop1 = "hello12";
    
    public function __construct() {
        $this->prop1 = __CLASS__." Instanciated";
    }
    
    public function __destruct() {
        echo 'killed';
    }
    
    public function __toString() {
        return __CLASS__." with prop1 = ".$this->prop1;
    }
    public function setProp1($new_value) {
        $this->prop1 = $new_value;
    }
    
    public function getProp1() {
        return $this->prop1;
    }
}

?>