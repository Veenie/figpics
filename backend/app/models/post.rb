class Post < ApplicationRecord
    validates :name, :text, presence: true
end
