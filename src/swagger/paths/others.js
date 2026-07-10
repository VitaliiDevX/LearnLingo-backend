export const otherPaths = {
  '/languages': {
    get: {
      tags: ['Languages'],
      summary: 'Get list of languages',
      responses: {
        200: {
          description: 'List of languages retrieved successfully',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: { $ref: '#/components/schemas/Language' },
              },
            },
          },
        },
        404: {
          description: 'Languages not found',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
            },
          },
        },
      },
    },
  },
  '/prices': {
    get: {
      tags: ['Prices'],
      summary: 'Get list of available price points',
      responses: {
        200: {
          description: 'List of prices retrieved successfully',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: { $ref: '#/components/schemas/Price' },
              },
            },
          },
        },
        404: {
          description: 'Prices not found',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
            },
          },
        },
      },
    },
  },
};
