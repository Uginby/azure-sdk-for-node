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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the RouteFilter class.
 * @constructor
 * Route Filter Resource.
 *
 * @member {array} [rules] Collection of RouteFilterRules contained within a
 * route filter.
 *
 * @member {array} [peerings] A collection of references to express route
 * circuit peerings.
 *
 * @member {string} [provisioningState] The provisioning state of the resource.
 * Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
 *
 * @member {string} [etag] Gets a unique read-only string that changes whenever
 * the resource is updated.
 *
 */
function RouteFilter() {
  RouteFilter['super_'].call(this);
}

util.inherits(RouteFilter, models['Resource']);

/**
 * Defines the metadata of RouteFilter
 *
 * @returns {object} metadata of RouteFilter
 *
 */
RouteFilter.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'RouteFilter',
    type: {
      name: 'Composite',
      className: 'RouteFilter',
      modelProperties: {
        id: {
          required: false,
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
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: false,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        rules: {
          required: false,
          serializedName: 'properties.rules',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'RouteFilterRuleElementType',
                type: {
                  name: 'Composite',
                  className: 'RouteFilterRule'
                }
            }
          }
        },
        peerings: {
          required: false,
          readOnly: true,
          serializedName: 'properties.peerings',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ExpressRouteCircuitPeeringElementType',
                type: {
                  name: 'Composite',
                  className: 'ExpressRouteCircuitPeering'
                }
            }
          }
        },
        provisioningState: {
          required: false,
          readOnly: true,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        },
        etag: {
          required: false,
          readOnly: true,
          serializedName: 'etag',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = RouteFilter;