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
 * A setting difference between two deployment slots of an app.
 *
 * @extends models['ProxyOnlyResource']
 */
class SlotDifference extends models['ProxyOnlyResource'] {
  /**
   * Create a SlotDifference.
   * @member {string} [slotDifferenceType] Type of the difference: Information,
   * Warning or Error.
   * @member {string} [settingType] The type of the setting: General,
   * AppSetting or ConnectionString.
   * @member {string} [diffRule] Rule that describes how to process the setting
   * difference during a slot swap.
   * @member {string} [settingName] Name of the setting.
   * @member {string} [valueInCurrentSlot] Value of the setting in the current
   * slot.
   * @member {string} [valueInTargetSlot] Value of the setting in the target
   * slot.
   * @member {string} [description] Description of the setting difference.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SlotDifference
   *
   * @returns {object} metadata of SlotDifference
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SlotDifference',
      type: {
        name: 'Composite',
        className: 'SlotDifference',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          slotDifferenceType: {
            required: false,
            readOnly: true,
            serializedName: 'properties.type',
            type: {
              name: 'String'
            }
          },
          settingType: {
            required: false,
            readOnly: true,
            serializedName: 'properties.settingType',
            type: {
              name: 'String'
            }
          },
          diffRule: {
            required: false,
            readOnly: true,
            serializedName: 'properties.diffRule',
            type: {
              name: 'String'
            }
          },
          settingName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.settingName',
            type: {
              name: 'String'
            }
          },
          valueInCurrentSlot: {
            required: false,
            readOnly: true,
            serializedName: 'properties.valueInCurrentSlot',
            type: {
              name: 'String'
            }
          },
          valueInTargetSlot: {
            required: false,
            readOnly: true,
            serializedName: 'properties.valueInTargetSlot',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SlotDifference;
