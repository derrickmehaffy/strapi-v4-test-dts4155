import type { Schema, Attribute } from '@strapi/strapi';

export interface TestMeh extends Schema.Component {
  collectionName: 'components_test_mehs';
  info: {
    displayName: 'meh';
    icon: 'apps';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface TestTest extends Schema.Component {
  collectionName: 'components_test_tests';
  info: {
    displayName: 'test';
    icon: 'alien';
    description: '';
  };
  attributes: {
    string: Attribute.String;
    mehs: Attribute.Relation<'test.test', 'oneToMany', 'api::meh.meh'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.meh': TestMeh;
      'test.test': TestTest;
    }
  }
}
