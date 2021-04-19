class Post < ApplicationRecord
    validates :name, :url, presence: true
end
