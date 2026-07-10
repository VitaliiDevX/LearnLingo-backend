export const schemas = {
  Review: {
    type: 'object',
    properties: {
      reviewer_name: { type: 'string', example: 'Eve' },
      reviewer_rating: { type: 'number', minimum: 1, maximum: 5, example: 5 },
      comment: {
        type: 'string',
        example: 'Jane is an amazing teacher! She is patient and supportive.',
      },
    },
    required: ['reviewer_name', 'reviewer_rating', 'comment'],
  },
  Teacher: {
    type: 'object',
    properties: {
      _id: { type: 'string', example: '60d5ec49f1b2c80015f8c123' },
      name: { type: 'string', example: 'Jane' },
      surname: { type: 'string', example: 'Smith' },
      languages: {
        type: 'array',
        items: { type: 'string' },
        example: ['French', 'German'],
      },
      levels: {
        type: 'array',
        items: { type: 'string' },
        example: ['A1 Beginner'],
      },
      rating: { type: 'number', minimum: 0, maximum: 5, example: 4.8 },
      reviews: {
        type: 'array',
        items: { $ref: '#/components/schemas/Review' },
      },
      price_per_hour: { type: 'number', example: 30 },
      lessons_done: { type: 'number', example: 1098 },
      avatar_url: {
        type: 'string',
        nullable: true,
        example: 'https://img.url',
      },
      lesson_info: {
        type: 'string',
        example:
          'Lessons are structured to cover grammar, vocabulary, and practical usage.',
      },
      conditions: {
        type: 'array',
        items: { type: 'string' },
        example: ['Provides personalized study plans.'],
      },
      experience: {
        type: 'string',
        example: 'Jane is an experienced and dedicated language teacher...',
      },
    },
    required: [
      'name',
      'surname',
      'languages',
      'levels',
      'rating',
      'price_per_hour',
      'lessons_done',
      'lesson_info',
      'conditions',
      'experience',
    ],
  },
  User: {
    type: 'object',
    properties: {
      _id: { type: 'string', example: '6881563901add19ee16fd011' },
      name: { type: 'string', example: 'John Smith' },
      email: { type: 'string', format: 'email', example: 'user@example.com' },
      avatar_url: { type: 'string', nullable: true },
      favoriteTeachers: { type: 'array', items: { type: 'string' } },
    },
    required: ['_id', 'name', 'email'],
  },
  Language: {
    type: 'string',
    example: 'French',
  },
  Price: {
    type: 'number',
    example: 30,
  },
  TeachersListResponse: {
    type: 'object',
    required: ['page', 'perPage', 'totalItems', 'totalPages', 'teachers'],
    properties: {
      page: { type: 'integer', example: 1 },
      perPage: { type: 'integer', example: 4 },
      totalItems: { type: 'integer', example: 48 },
      totalPages: { type: 'integer', example: 12 },
      teachers: {
        type: 'array',
        items: { $ref: '#/components/schemas/Teacher' },
      },
    },
  },
  RegisterRequest: {
    type: 'object',
    properties: {
      name: { type: 'string', example: 'John Smith' },
      email: { type: 'string', format: 'email', example: 'user@example.com' },
      password: { type: 'string', example: 'password123' },
    },
    required: ['name', 'email', 'password'],
  },
  LoginRequest: {
    type: 'object',
    properties: {
      email: { type: 'string', format: 'email', example: 'user@example.com' },
      password: { type: 'string', example: 'password123' },
    },
    required: ['email', 'password'],
  },
  FavoriteTeachersResponse: {
    type: 'object',
    properties: {
      page: { type: 'integer', example: 1 },
      perPage: { type: 'integer', example: 4 },
      totalItems: { type: 'integer', example: 10 },
      totalPages: { type: 'integer', example: 3 },
      teachers: {
        type: 'array',
        items: { $ref: '#/components/schemas/Teacher' },
      },
    },
    required: ['page', 'perPage', 'totalItems', 'totalPages', 'teachers'],
  },
  SuccessResponse: {
    type: 'object',
    properties: {
      message: { type: 'string', example: 'Operation successful' },
    },
    required: ['message'],
  },
  ErrorResponse: {
    type: 'object',
    properties: {
      message: { type: 'string', example: 'Error message' },
    },
    required: ['message'],
  },
};
