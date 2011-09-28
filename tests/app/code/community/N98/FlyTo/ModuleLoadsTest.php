<?php
/**
 * netz98 FlyTo magento module
 *
 * LICENSE
 *
 * This source file is subject of netz98.
 * You may be not allowed to change the sources
 * without authorization of netz98 new media GmbH.
 *
 * @copyright Copyright (c) 2011 netz98 new media GmbH (http://www.netz98.de)
 * @author netz98 new media GmbH <info@netz98.de>
 * @category N98
 * @package N98_FlyTo
 */

class N98_FlyTo_ModuleLoadsTest extends PHPUnit_Framework_TestCase
{
    /**
     * Tests if the block is correctly loaded
     */
    public function testLoadBlock()
    {
        $block = Mage::app()->getLayout()->createBlock('n98flyto/flyer');

        //validate instance
        $this->assertInstanceOf('N98_FlyTo_Block_Flyer', $block);
    }
}
