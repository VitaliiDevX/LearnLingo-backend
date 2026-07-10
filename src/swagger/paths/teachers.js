export const teacherPaths = {
  '/teachers': {
    get: {
      tags: ['Teachers'],
      summary: 'Get list of teachers with filtering',
      parameters: [
        { $ref: '#/components/parameters/PageParam' },
        { $ref: '#/components/parameters/PerPageParam' },
        { $ref: '#/components/parameters/TeacherLanguageQuery' },
        { $ref: '#/components/parameters/TeacherPriceQuery' },
        { $ref: '#/components/parameters/TeacherLevelQuery' },
      ],
      responses: {
        200: {
          description: 'List of teachers retrieved successfully',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/TeachersListResponse' },
            },
          },
        },
        400: {
          description: 'Validation error',
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
