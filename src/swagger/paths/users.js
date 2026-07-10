export const userPaths = {
  '/users/me': {
    get: {
      tags: ['Users'],
      summary: 'Get current user profile',
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: 'User profile retrieved successfully',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/User' },
            },
          },
        },
        404: {
          description: 'User not found',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
            },
          },
        },
      },
    },
    patch: {
      tags: ['Users'],
      summary: 'Update user profile',
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: { name: { type: 'string', example: 'New Name' } },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'User updated successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  user: { $ref: '#/components/schemas/User' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        404: {
          description: 'User not found',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
            },
          },
        },
      },
    },
    delete: {
      tags: ['Users'],
      summary: 'Delete user account and sessions',
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: 'User deleted successfully',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/SuccessResponse' },
            },
          },
        },
      },
    },
  },
  '/users/favorites': {
    get: {
      tags: ['Users'],
      summary: 'Get paginated list of favorite teachers',
      security: [{ bearerAuth: [] }],
      parameters: [
        { $ref: '#/components/parameters/PageParam' },
        { $ref: '#/components/parameters/PerPageParam' },
      ],
      responses: {
        200: {
          description: 'List of favorites',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/FavoriteTeachersResponse' },
            },
          },
        },
      },
    },
  },
  '/users/favorites/{teacherId}': {
    post: {
      tags: ['Users'],
      summary: 'Add teacher to favorites',
      security: [{ bearerAuth: [] }],
      parameters: [{ $ref: '#/components/parameters/TeacherIdParam' }],
      responses: {
        200: {
          description: 'Teacher added to favorites',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/SuccessResponse' },
            },
          },
        },
        404: {
          description: 'Teacher not found',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
            },
          },
        },
      },
    },
    delete: {
      tags: ['Users'],
      summary: 'Remove teacher from favorites',
      security: [{ bearerAuth: [] }],
      parameters: [{ $ref: '#/components/parameters/TeacherIdParam' }],
      responses: {
        200: {
          description: 'Teacher removed from favorites',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/SuccessResponse' },
            },
          },
        },
      },
    },
  },
};
