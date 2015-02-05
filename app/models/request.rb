class Request
    attr_reader :params, :request, :attribute, :opposite

    def initialize(type, params={})
      @params = params
      @request = CardUser.where(**params).first
      @attribute = attributes[type][:attribute]
      @opposite = attributes[type][:opposite]
    end

    def process
      if request.nil?
        create
      else
        update
      end
    end

    def update
      if request[opposite] == false && request.updated_at < 1.weeks.ago
        request.update_attribute(opposite, nil)
      elsif request[attribute] == false
        request.update_attribute(attribute, true)
      end
    end

    def create
      card_user = CardUser.find_or_create_by(attribute => true, user: params[:user], card: params[:card])
      return true, card_user
    end

    def answer(answer)
      if request && answer.in?(["false", "true"])
        request.update_attribute(attribute, answer)
        replace_responsable
        return true, request
      end
    end

    def replace_responsable
      responsable = Responsable.find_by_email(params[:user].email)
      CardResponsable.find_by_card_id_and_responsable_id(params[:card].id, responsable.id).try(:destroy) if responsable
    end

    def attributes
      { card: { attribute: :card_validated, opposite: :user_validated }, user: { attribute: :user_validated, opposite: :user_validated }}
    end

  end 