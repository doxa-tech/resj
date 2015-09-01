class SubjectTable < BaseTable

  def attributes
    [
      :id, :name, :description, :created_at, :updated_at, { user: :full_name }
    ]
  end

  def model
    Subject
  end

end