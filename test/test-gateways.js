'use strict';

var gw = require('../lib/gateways.js');
var gui = require('../lib/gui.js');
const tabs = require('sdk/tabs');
const ipfsPath = 'ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/';
const ipnsPath = 'ipns/ipfs.git.sexy/';
const button = gui.toggleButton;

exports['test enabled /ipfs/ redirect (old http gw)'] = function(assert, done) {
  // open Public Gateway URL and check if it gets redirected to gw.customUri()
  gw.enableHttpGatewayRedirect(button);
  // HTTP
  tabs.open({
    url: 'http://gateway.ipfs.io/' + ipfsPath,
    onReady: function onReady(tab) {
      assert.equal(tab.url, gw.customUri().spec + ipfsPath, 'expected redirect');
      tab.close(done);
    }
  });
};

exports['test enabled /ipfs/ redirect (old https gw)'] = function(assert, done) {
  // open Public Gateway URL and check if it gets redirected to gw.customUri()
  gw.enableHttpGatewayRedirect(button);
  // HTTPS
  tabs.open({
    url: 'https://gateway.ipfs.io/' + ipfsPath,
    onReady: function onReady(tab) {
      assert.equal(tab.url, gw.customUri().spec + ipfsPath, 'expected redirect');
      tab.close(done);
    }
  });
};

exports['test enabled /ipfs/ redirect (http gw)'] = function(assert, done) {
  // open Public Gateway URL and check if it gets redirected to gw.customUri()
  gw.enableHttpGatewayRedirect(button);
  // HTTP
  tabs.open({
    url: 'http://ipfs.io/' + ipfsPath,
    onReady: function onReady(tab) {
      assert.equal(tab.url, gw.customUri().spec + ipfsPath, 'expected redirect');
      tab.close(done);
    }
  });
};

exports['test enabled /ipfs/ redirect (https gw)'] = function(assert, done) {
  // open Public Gateway URL and check if it gets redirected to gw.customUri()
  gw.enableHttpGatewayRedirect(button);
  // HTTPS
  tabs.open({
    url: 'https://ipfs.io/' + ipfsPath,
    onReady: function onReady(tab) {
      assert.equal(tab.url, gw.customUri().spec + ipfsPath, 'expected redirect');
      tab.close(done);
    }
  });
};

exports['test disabled /ipfs/ redirect'] = function(assert, done) {
  // same check, but with disabled redirection
  gw.enableHttpGatewayRedirect(button);
  gw.disableHttpGatewayRedirect(button);
  tabs.open({
    url: gw.publicUri().spec + ipfsPath,
    onReady: function onReady(tab) {
      assert.equal(tab.url, gw.publicUri().spec + ipfsPath, 'no redirect expected');
      tab.close(done);
    }
  });
};

exports['test enabled /ipns/ redirect'] = function(assert, done) {
  // open Public Gateway URL and check if it gets redirected to gw.customUri()
  gw.enableHttpGatewayRedirect(button);
  tabs.open({
    url: gw.publicUri().spec + ipnsPath,
    onReady: function onReady(tab) {
      assert.equal(tab.url, gw.customUri().spec + ipnsPath, 'expected redirect');
      tab.close(done);
    }
  });
};

exports['test disabled /ipns/ redirect'] = function(assert, done) {
  // same check, but with disabled redirection
  gw.enableHttpGatewayRedirect(button);
  gw.disableHttpGatewayRedirect(button);
  tabs.open({
    url: gw.publicUri().spec + ipnsPath,
    onReady: function onReady(tab) {
      assert.equal(tab.url, gw.publicUri().spec + ipnsPath, 'no redirect expected');
      tab.close(done);
    }
  });
};


require('sdk/test').run(exports);
