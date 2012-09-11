class NotesController < ApplicationController
  respond_to :json

  def index
    @notes = Note.where(user_id: current_user.id).asc(:created_at)

    respond_with(@notes)
  end

  def show
    @note = Note.where(user_id: current_user.id).find(params[:id])

    respond_with @note
  end

  def create
    @note = Note.new(params[:note])
    @note.user_id = current_user.id
    @note.save

    respond_with @note
  end

  def destroy
    @note = Note.where(user_id: current_user.id).find(params[:id])
    @note.destroy if @note

    respond_to do |format|
      format.json { head :no_content }
    end
  end
end
