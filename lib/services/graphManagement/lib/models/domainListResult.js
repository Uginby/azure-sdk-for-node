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

/**
 * Server response for Get tenant domains API call.
 */
class DomainListResult extends Array {
  /**
   * Create a DomainListResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DomainListResult
   *
   * @returns {object} metadata of DomainListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DomainListResult',
      type: {
        name: 'Composite',
        className: 'DomainListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DomainElementType',
                  type: {
                    name: 'Composite',
                    className: 'Domain'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DomainListResult;
