class Task < ActiveRecord::Base
  enum status: {todo: 0, doing: 1, done: 2}
  validates :content, presence: true
  paginates_per 5
end
