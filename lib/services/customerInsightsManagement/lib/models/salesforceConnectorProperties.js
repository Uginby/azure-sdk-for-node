/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the SalesforceConnectorProperties class.
 * @constructor
 * The Salesforce connector properties.
 *
 * @member {object} usersetting The user settings.
 *
 * @member {string} [usersetting.salesforceConnectionStringSecretUrl] The
 * salesforce connection string secret URL.
 *
 * @member {array} salesforcetables The Salesforce tables.
 *
 */
class SalesforceConnectorProperties {
  constructor() {
  }

  /**
   * Defines the metadata of SalesforceConnectorProperties
   *
   * @returns {object} metadata of SalesforceConnectorProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SalesforceConnectorProperties',
      type: {
        name: 'Composite',
        className: 'SalesforceConnectorProperties',
        modelProperties: {
          usersetting: {
            required: true,
            serializedName: 'usersetting',
            type: {
              name: 'Composite',
              className: 'SalesforceDiscoverSetting'
            }
          },
          salesforcetables: {
            required: true,
            serializedName: 'salesforcetables',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SalesforceTableElementType',
                  type: {
                    name: 'Composite',
                    className: 'SalesforceTable'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SalesforceConnectorProperties;