import * as assert from 'assert';
import {StickyContext} from '../src/index'

describe('test singleton : ', function() {
  it('should create a singleton', function() {
    var singleton = StickyContext.getInstance();
    assert.equal('object', typeof(singleton));
  });

  it('should test if context is sat', function() {
    var singleton = StickyContext.getInstance();
    singleton.initContext({
      'key1' : 'value1',
      'key2' : 'value2'
    });
    assert.equal('value1', singleton.getContext()['key1']);
    assert.equal('value2', singleton.getContext()['key2']);
  });

  it('should test if two singletons are equal', function() {
    var singleton = StickyContext.getInstance();
    var singleton2 = StickyContext.getInstance();
    assert.deepEqual(singleton, singleton2);
  });

  it('should test if two singletons are still equal after some changes', function() {
    var singleton = StickyContext.getInstance();
    var singleton2 = StickyContext.getInstance();
    singleton.initContext({
      'key1' : 'value1',
      'key2' : 'value2'
    });
    assert.equal(singleton.getContext()['key1'], singleton2.getContext()['key1']);
  });
});
